import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo44Component } from './lib89-demo44.component';

describe('Lib89Demo44Component', () => {
  let component: Lib89Demo44Component;
  let fixture: ComponentFixture<Lib89Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
