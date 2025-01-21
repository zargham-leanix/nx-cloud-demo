import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo26Component } from './lib40-demo26.component';

describe('Lib40Demo26Component', () => {
  let component: Lib40Demo26Component;
  let fixture: ComponentFixture<Lib40Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
