import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo16Component } from './lib35-demo16.component';

describe('Lib35Demo16Component', () => {
  let component: Lib35Demo16Component;
  let fixture: ComponentFixture<Lib35Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
