import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo10Component } from './lib1-demo10.component';

describe('Lib1Demo10Component', () => {
  let component: Lib1Demo10Component;
  let fixture: ComponentFixture<Lib1Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
