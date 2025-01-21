import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo27Component } from './lib27-demo27.component';

describe('Lib27Demo27Component', () => {
  let component: Lib27Demo27Component;
  let fixture: ComponentFixture<Lib27Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
