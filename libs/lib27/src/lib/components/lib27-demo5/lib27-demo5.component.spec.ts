import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo5Component } from './lib27-demo5.component';

describe('Lib27Demo5Component', () => {
  let component: Lib27Demo5Component;
  let fixture: ComponentFixture<Lib27Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
