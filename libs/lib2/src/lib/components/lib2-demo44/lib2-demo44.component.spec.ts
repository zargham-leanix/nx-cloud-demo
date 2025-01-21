import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo44Component } from './lib2-demo44.component';

describe('Lib2Demo44Component', () => {
  let component: Lib2Demo44Component;
  let fixture: ComponentFixture<Lib2Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
