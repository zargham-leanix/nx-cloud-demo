import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo5Component } from './lib17-demo5.component';

describe('Lib17Demo5Component', () => {
  let component: Lib17Demo5Component;
  let fixture: ComponentFixture<Lib17Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
