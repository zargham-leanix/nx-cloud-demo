import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo27Component } from './lib24-demo27.component';

describe('Lib24Demo27Component', () => {
  let component: Lib24Demo27Component;
  let fixture: ComponentFixture<Lib24Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
