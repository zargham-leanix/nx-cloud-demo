import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo5Component } from './lib64-demo5.component';

describe('Lib64Demo5Component', () => {
  let component: Lib64Demo5Component;
  let fixture: ComponentFixture<Lib64Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
