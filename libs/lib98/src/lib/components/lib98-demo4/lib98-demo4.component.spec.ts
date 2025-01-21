import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo4Component } from './lib98-demo4.component';

describe('Lib98Demo4Component', () => {
  let component: Lib98Demo4Component;
  let fixture: ComponentFixture<Lib98Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
