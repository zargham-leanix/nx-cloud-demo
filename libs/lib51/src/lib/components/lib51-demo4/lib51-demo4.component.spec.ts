import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo4Component } from './lib51-demo4.component';

describe('Lib51Demo4Component', () => {
  let component: Lib51Demo4Component;
  let fixture: ComponentFixture<Lib51Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
