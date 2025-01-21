import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo10Component } from './lib54-demo10.component';

describe('Lib54Demo10Component', () => {
  let component: Lib54Demo10Component;
  let fixture: ComponentFixture<Lib54Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
