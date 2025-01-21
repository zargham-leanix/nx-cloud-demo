import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo10Component } from './lib97-demo10.component';

describe('Lib97Demo10Component', () => {
  let component: Lib97Demo10Component;
  let fixture: ComponentFixture<Lib97Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
