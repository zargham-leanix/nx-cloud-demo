import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo26Component } from './lib29-demo26.component';

describe('Lib29Demo26Component', () => {
  let component: Lib29Demo26Component;
  let fixture: ComponentFixture<Lib29Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
