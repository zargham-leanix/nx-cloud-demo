import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo29Component } from './lib31-demo29.component';

describe('Lib31Demo29Component', () => {
  let component: Lib31Demo29Component;
  let fixture: ComponentFixture<Lib31Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
