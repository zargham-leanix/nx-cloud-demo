import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo5Component } from './lib22-demo5.component';

describe('Lib22Demo5Component', () => {
  let component: Lib22Demo5Component;
  let fixture: ComponentFixture<Lib22Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
