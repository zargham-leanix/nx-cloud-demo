import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo6Component } from './lib35-demo6.component';

describe('Lib35Demo6Component', () => {
  let component: Lib35Demo6Component;
  let fixture: ComponentFixture<Lib35Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
