import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo27Component } from './lib21-demo27.component';

describe('Lib21Demo27Component', () => {
  let component: Lib21Demo27Component;
  let fixture: ComponentFixture<Lib21Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
