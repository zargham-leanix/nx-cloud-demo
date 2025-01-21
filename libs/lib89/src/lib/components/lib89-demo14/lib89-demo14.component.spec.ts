import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo14Component } from './lib89-demo14.component';

describe('Lib89Demo14Component', () => {
  let component: Lib89Demo14Component;
  let fixture: ComponentFixture<Lib89Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
