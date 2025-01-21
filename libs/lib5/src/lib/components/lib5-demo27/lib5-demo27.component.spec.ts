import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo27Component } from './lib5-demo27.component';

describe('Lib5Demo27Component', () => {
  let component: Lib5Demo27Component;
  let fixture: ComponentFixture<Lib5Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
