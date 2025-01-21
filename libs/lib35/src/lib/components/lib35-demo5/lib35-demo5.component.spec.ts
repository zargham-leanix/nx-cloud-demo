import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo5Component } from './lib35-demo5.component';

describe('Lib35Demo5Component', () => {
  let component: Lib35Demo5Component;
  let fixture: ComponentFixture<Lib35Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
