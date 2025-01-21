import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo36Component } from './lib35-demo36.component';

describe('Lib35Demo36Component', () => {
  let component: Lib35Demo36Component;
  let fixture: ComponentFixture<Lib35Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
