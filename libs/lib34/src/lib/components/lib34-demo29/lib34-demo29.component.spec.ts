import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo29Component } from './lib34-demo29.component';

describe('Lib34Demo29Component', () => {
  let component: Lib34Demo29Component;
  let fixture: ComponentFixture<Lib34Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
