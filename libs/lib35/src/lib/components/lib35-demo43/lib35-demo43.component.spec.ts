import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo43Component } from './lib35-demo43.component';

describe('Lib35Demo43Component', () => {
  let component: Lib35Demo43Component;
  let fixture: ComponentFixture<Lib35Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
