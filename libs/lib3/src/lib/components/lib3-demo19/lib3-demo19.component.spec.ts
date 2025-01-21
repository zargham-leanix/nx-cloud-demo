import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo19Component } from './lib3-demo19.component';

describe('Lib3Demo19Component', () => {
  let component: Lib3Demo19Component;
  let fixture: ComponentFixture<Lib3Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
