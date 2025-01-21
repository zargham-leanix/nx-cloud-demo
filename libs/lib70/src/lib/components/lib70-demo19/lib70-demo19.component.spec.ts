import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo19Component } from './lib70-demo19.component';

describe('Lib70Demo19Component', () => {
  let component: Lib70Demo19Component;
  let fixture: ComponentFixture<Lib70Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
