import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo19Component } from './lib89-demo19.component';

describe('Lib89Demo19Component', () => {
  let component: Lib89Demo19Component;
  let fixture: ComponentFixture<Lib89Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
