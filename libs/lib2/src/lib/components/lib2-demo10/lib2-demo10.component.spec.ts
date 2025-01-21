import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo10Component } from './lib2-demo10.component';

describe('Lib2Demo10Component', () => {
  let component: Lib2Demo10Component;
  let fixture: ComponentFixture<Lib2Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
