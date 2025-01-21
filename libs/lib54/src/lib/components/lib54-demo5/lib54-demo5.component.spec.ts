import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo5Component } from './lib54-demo5.component';

describe('Lib54Demo5Component', () => {
  let component: Lib54Demo5Component;
  let fixture: ComponentFixture<Lib54Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
