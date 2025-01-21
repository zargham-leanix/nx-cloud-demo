import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo2Component } from './lib35-demo2.component';

describe('Lib35Demo2Component', () => {
  let component: Lib35Demo2Component;
  let fixture: ComponentFixture<Lib35Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
