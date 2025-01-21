import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo10Component } from './lib79-demo10.component';

describe('Lib79Demo10Component', () => {
  let component: Lib79Demo10Component;
  let fixture: ComponentFixture<Lib79Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
