import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo32Component } from './lib35-demo32.component';

describe('Lib35Demo32Component', () => {
  let component: Lib35Demo32Component;
  let fixture: ComponentFixture<Lib35Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
