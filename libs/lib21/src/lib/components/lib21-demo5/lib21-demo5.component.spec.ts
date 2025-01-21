import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo5Component } from './lib21-demo5.component';

describe('Lib21Demo5Component', () => {
  let component: Lib21Demo5Component;
  let fixture: ComponentFixture<Lib21Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
