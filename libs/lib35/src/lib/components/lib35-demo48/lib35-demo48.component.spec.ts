import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo48Component } from './lib35-demo48.component';

describe('Lib35Demo48Component', () => {
  let component: Lib35Demo48Component;
  let fixture: ComponentFixture<Lib35Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
