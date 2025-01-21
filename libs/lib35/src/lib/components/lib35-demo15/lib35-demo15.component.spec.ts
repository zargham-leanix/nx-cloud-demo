import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo15Component } from './lib35-demo15.component';

describe('Lib35Demo15Component', () => {
  let component: Lib35Demo15Component;
  let fixture: ComponentFixture<Lib35Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
