import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo14Component } from './lib35-demo14.component';

describe('Lib35Demo14Component', () => {
  let component: Lib35Demo14Component;
  let fixture: ComponentFixture<Lib35Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
