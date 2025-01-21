import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo27Component } from './lib86-demo27.component';

describe('Lib86Demo27Component', () => {
  let component: Lib86Demo27Component;
  let fixture: ComponentFixture<Lib86Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
