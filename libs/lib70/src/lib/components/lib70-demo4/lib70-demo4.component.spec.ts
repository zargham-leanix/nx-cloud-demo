import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo4Component } from './lib70-demo4.component';

describe('Lib70Demo4Component', () => {
  let component: Lib70Demo4Component;
  let fixture: ComponentFixture<Lib70Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
