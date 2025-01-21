import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo5Component } from './lib90-demo5.component';

describe('Lib90Demo5Component', () => {
  let component: Lib90Demo5Component;
  let fixture: ComponentFixture<Lib90Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
