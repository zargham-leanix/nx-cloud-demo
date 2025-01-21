import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo4Component } from './lib97-demo4.component';

describe('Lib97Demo4Component', () => {
  let component: Lib97Demo4Component;
  let fixture: ComponentFixture<Lib97Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
