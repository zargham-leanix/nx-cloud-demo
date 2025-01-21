import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo26Component } from './lib46-demo26.component';

describe('Lib46Demo26Component', () => {
  let component: Lib46Demo26Component;
  let fixture: ComponentFixture<Lib46Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
