import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo5Component } from './lib74-demo5.component';

describe('Lib74Demo5Component', () => {
  let component: Lib74Demo5Component;
  let fixture: ComponentFixture<Lib74Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
