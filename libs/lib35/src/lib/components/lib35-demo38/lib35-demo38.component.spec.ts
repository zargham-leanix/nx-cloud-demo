import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo38Component } from './lib35-demo38.component';

describe('Lib35Demo38Component', () => {
  let component: Lib35Demo38Component;
  let fixture: ComponentFixture<Lib35Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
