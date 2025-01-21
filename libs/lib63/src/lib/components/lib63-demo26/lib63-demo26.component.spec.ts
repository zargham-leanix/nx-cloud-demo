import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo26Component } from './lib63-demo26.component';

describe('Lib63Demo26Component', () => {
  let component: Lib63Demo26Component;
  let fixture: ComponentFixture<Lib63Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
