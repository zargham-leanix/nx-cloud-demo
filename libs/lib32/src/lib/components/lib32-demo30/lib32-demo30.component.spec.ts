import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo30Component } from './lib32-demo30.component';

describe('Lib32Demo30Component', () => {
  let component: Lib32Demo30Component;
  let fixture: ComponentFixture<Lib32Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
