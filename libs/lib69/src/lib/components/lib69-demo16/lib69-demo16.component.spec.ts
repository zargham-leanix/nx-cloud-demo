import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo16Component } from './lib69-demo16.component';

describe('Lib69Demo16Component', () => {
  let component: Lib69Demo16Component;
  let fixture: ComponentFixture<Lib69Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
