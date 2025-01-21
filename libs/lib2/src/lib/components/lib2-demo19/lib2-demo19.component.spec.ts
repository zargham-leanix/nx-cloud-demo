import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo19Component } from './lib2-demo19.component';

describe('Lib2Demo19Component', () => {
  let component: Lib2Demo19Component;
  let fixture: ComponentFixture<Lib2Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
