import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo35Component } from './lib36-demo35.component';

describe('Lib36Demo35Component', () => {
  let component: Lib36Demo35Component;
  let fixture: ComponentFixture<Lib36Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
