import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo5Component } from './lib83-demo5.component';

describe('Lib83Demo5Component', () => {
  let component: Lib83Demo5Component;
  let fixture: ComponentFixture<Lib83Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
