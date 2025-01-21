import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo33Component } from './lib35-demo33.component';

describe('Lib35Demo33Component', () => {
  let component: Lib35Demo33Component;
  let fixture: ComponentFixture<Lib35Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
