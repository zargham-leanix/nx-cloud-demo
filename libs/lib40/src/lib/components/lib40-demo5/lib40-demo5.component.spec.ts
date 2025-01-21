import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo5Component } from './lib40-demo5.component';

describe('Lib40Demo5Component', () => {
  let component: Lib40Demo5Component;
  let fixture: ComponentFixture<Lib40Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
