import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo45Component } from './lib35-demo45.component';

describe('Lib35Demo45Component', () => {
  let component: Lib35Demo45Component;
  let fixture: ComponentFixture<Lib35Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
