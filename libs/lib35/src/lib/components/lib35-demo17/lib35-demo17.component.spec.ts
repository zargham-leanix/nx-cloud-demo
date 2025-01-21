import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo17Component } from './lib35-demo17.component';

describe('Lib35Demo17Component', () => {
  let component: Lib35Demo17Component;
  let fixture: ComponentFixture<Lib35Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
